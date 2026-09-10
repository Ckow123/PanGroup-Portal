# Pan Group Portal — Workspace Rules

## Ownership and production

- This repository owns the Pan Group Portal.
- Production URL: https://oncologykarpathywiki.cn
- Production branch: `main`.
- Research Atlas / Quartz lives at https://atlas.oncologykarpathywiki.cn, with production branch `atlas-migration`.
- Atlas (`E:/Obsidian/Oncology_Karpathy_Wiki_Web-Site`) and the authoritative source Vault (`E:/Obsidian/Oncology_Karpathy_Wiki_Vault_v2`) are separate workspaces; normal Portal work must not modify them.

## Scope boundaries

- Preserve the current Portal-to-Atlas route contract unless explicitly authorized to change it.
- Normal Portal development must not modify DNS, Cloudflare Custom Domains, Redirect Rules, or Atlas publishing configuration.
- P7 root-domain migration is COMPLETE and historical; do not replay it during normal workflows. Existing DNS, Custom Domains, and the 7 Redirect Rules are stable.
- Do not reintroduce the removed desktop pointer parallax.
- Preserve the current compositor-safe Hero/CTA behavior unless a change is explicitly scoped.
- Low-risk, reversible, clearly scoped Portal changes may proceed without repeated confirmation.
- STOP on production topology changes; cross-repository writes; destructive Git changes; route-contract changes affecting Atlas; or DNS/domain/Redirect changes. Resolve scope with the user before proceeding.

## Git safety

- Never use `git add .`.
- Inspect the diff before staging; stage exact files only.
- No force push, reset, or clean; no destructive whole-tree restore.

## Repository instruction priority

Apply this order, highest first:

1. Explicit current user instruction.
2. This root `AGENTS.md`.
3. Repository/product documentation.
4. Relevant Skill/tool instructions.
