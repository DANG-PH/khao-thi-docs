// Vẽ sơ đồ Mermaid tông trắng đen (theme neutral), co vừa khung
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs";
mermaid.initialize({ startOnLoad: false, securityLevel: "strict", theme: "neutral", flowchart: { useMaxWidth: true }, fontFamily: '"Be Vietnam Pro", system-ui, sans-serif' });
await mermaid.run({ querySelector: "pre.mermaid" });
