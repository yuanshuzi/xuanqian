# -*- coding: utf-8 -*-
"""从 iching.sjlyedu.com 的《周易》全文页抓取 64 卦卦辞与爻辞，生成 data/yaoci.js。

原文属公有领域；此处仅抓取“卦辞 + 爻辞”两层，不含彖、象、文言。
用法：python tools/build-yaoci.py
"""
import json
import re
import urllib.request
from pathlib import Path

URL = "https://iching.sjlyedu.com/quanwen.html"
ROOT = Path(__file__).resolve().parents[1]

TRIGRAM = {"天": "乾", "泽": "兑", "火": "离", "雷": "震", "风": "巽", "水": "坎", "山": "艮", "地": "坤",
           "乾": "乾", "兑": "兑", "离": "离", "震": "震", "巽": "巽", "坎": "坎", "艮": "艮", "坤": "坤"}


def fetch() -> str:
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8")


def parse(html: str):
    out = {}
    blocks = re.split(r'(?=<h2><a href="gua-\d+\.html">)', html)
    for block in blocks:
        m = re.match(r'<h2><a href="gua-\d+\.html">(\d+)\.\s*([^<（(]+)（', block)
        if not m:
            continue
        number, full = int(m.group(1)), m.group(2).strip()
        gua = re.search(r'<p class="gua"><b>卦辞：</b>(.*?)</p>', block, re.S)
        yao = re.findall(r'<span class="yao-tag">([^<]+)</span><span class="yao-text">([^<]+)</span>', block)
        if not gua or len(yao) < 6:
            raise SystemExit(f"解析失败：{number} {full}")
        if len(full) >= 3 and full[1] == "为":
            upper = lower = TRIGRAM[full[0]]
        else:
            upper, lower = TRIGRAM[full[0]], TRIGRAM[full[1]]
        out[upper + lower] = {
            "no": number,
            "name": full,
            "gua": gua.group(1).strip(),
            "yao": [f"{tag}：{text.strip()}" for tag, text in yao],
        }
    return out


def main():
    data = parse(fetch())
    if len(data) != 64:
        raise SystemExit(f"只解析到 {len(data)} 卦")
    lines = [
        "/* 《周易》六十四卦 卦辞与爻辞原文（简体）。",
        " * 底本：周易正义（公有领域），抓取自 iching.sjlyedu.com/quanwen.html。",
        " * 由 tools/build-yaoci.js? -> tools/build-yaoci.py 生成，勿手改。",
        " */",
        "window.XQ_YAOCI = " + json.dumps(data, ensure_ascii=False, indent=1, sort_keys=True) + ";",
    ]
    (ROOT / "data").mkdir(exist_ok=True)
    (ROOT / "data" / "yaoci.js").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"写入 data/yaoci.js，共 {len(data)} 卦")


if __name__ == "__main__":
    main()
