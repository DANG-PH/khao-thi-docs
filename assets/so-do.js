// Vẽ sơ đồ Mermaid tông trắng đen (theme neutral), co vừa khung; sơ đồ tuần tự: không lặp tác nhân ở đáy, tự xuống dòng
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs";
mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral", flowchart: { useMaxWidth: true }, sequence: { useMaxWidth: true, mirrorActors: false, wrap: true, width: 170, messageMargin: 32, boxMargin: 8, noteMargin: 8 }, fontFamily: '"Be Vietnam Pro", system-ui, sans-serif' });
await mermaid.run({ querySelector: "pre.mermaid" });
