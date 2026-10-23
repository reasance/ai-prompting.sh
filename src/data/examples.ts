export type Example = {
  label: string;
  before: string;
  after: string;
  scoreBefore: number;
  scoreAfter: number;
};

// Hero example shown on the home page. Represents the SKILL output —
// the rewrite produced by your host agent's LLM after applying the
// 9-step procedure. Compare with EXAMPLES[0], which has the same
// `before` string but shows the deterministic CLI baseline output:
// same input, two layers, very different richness.
export const HERO_EXAMPLE: Example = {
  label: 'Rewritten by your agent',
  before: 'help me write something good',
  after: `<role>Senior editor for developer-facing technical content.</role>

<objective>
Produce a single-thesis piece (200–300 words) the user can ship as a
blog post, a doc page, or a release-note paragraph.
</objective>

<context>
The original request is underspecified. Working assumptions —
confirm or correct any before I draft:
- Audience: developers / founders / technical readers.
- Genre: explanatory or persuasive, not fiction.
- Length: 200–300 words.
- Voice: direct, plain English, no marketing hype.
- Topic: pending — if it isn't clear from prior context I'll ask
  one focused multiple-choice question (max 4 options).
</context>

<task>
1. If a topic exists in context, draft on that. Otherwise ask the MCQ.
2. Open with a concrete claim, not a hook.
3. Each paragraph advances the argument; cut filler.
4. Close with a takeaway or a next action.
</task>

<constraints>
- Banned phrasings: "In today's fast-paced world…", "revolutionary",
  "AI-powered", "supercharge", "blazing-fast".
- Cite factual claims; label opinions as such.
- Match the voice of any sample writing the user provides.
</constraints>

<output_format>
Markdown: H2 title, 3–5 paragraphs, one optional pull-quote.
</output_format>`,
  scoreBefore: 30,
  scoreAfter: 80
};

// Generated with the package CLI (ai-prompting 0.4.0, --mode standard --language en):
// node ../ai-prompting/dist/src/cli.js improve --prompt "<before>" --mode standard --language en
export const EXAMPLES: Example[] = [
  {
    label: 'Writing — vague request',
    before: 'help me write something good',
    after: `<role>
Senior editor focused on clarity, rhythm, and audience fit.
</role>

<context>
[ASSUMPTION: no separate context block; the facts stated in the task are the context — flag load-bearing assumptions]
</context>

<task>
help me write something good
</task>

<constraints>
- Unknown specifics (names, dates, figures) go in [brackets]; never invent them.
</constraints>

<output_format>
Flowing prose; 60-90 word paragraphs; no bullets unless a real list; title + subtitle when appropriate.
</output_format>

<quality_bar>
- Length, tone, and audience match the request.
- Conformance to all constraints above.
- Output matches the declared schema/format on the first try.
</quality_bar>`,
    scoreBefore: 30,
    scoreAfter: 63
  },
  {
    label: 'Coding — under-specified task',
    before: 'fix the bug in the auth flow',
    after: `<role>
Senior software engineer with experience in the requested language/framework.
</role>

<context>
[ASSUMPTION: no separate context block; the facts stated in the task are the context — flag load-bearing assumptions]
</context>

<task>
fix the bug in the auth flow
</task>

<constraints>
- Preserve existing public interfaces unless the task says otherwise.
- No new dependencies unless requested.
</constraints>

<output_format>
Code in a fenced block with language tag; precede with 2-4 lines explaining choices; follow with tests or follow-up notes if relevant.
</output_format>

<quality_bar>
- Builds cleanly and the affected tests pass.
- Conformance to all constraints above.
- Output matches the declared schema/format on the first try.
</quality_bar>`,
    scoreBefore: 35,
    scoreAfter: 67
  },
  {
    label: 'Research — missing scope',
    before: 'research llm prompt techniques',
    after: `<role>
Senior research analyst with rigorous citation and source-triangulation method.
</role>

<context>
[ASSUMPTION: no separate context block; the facts stated in the task are the context — flag load-bearing assumptions]
</context>

<task>
research llm prompt techniques
</task>

<constraints>
- Explicitly distinguish facts, inferences, and assumptions.
- If critical information is missing, declare it rather than inventing.
</constraints>

<output_format>
Summary (3-5 sentences); findings with inline [n] citations; open questions; numbered source list (author, title, year, URL).
</output_format>

<quality_bar>
- Answer is verifiable: every non-trivial claim has evidence or a source.
- Conformance to all constraints above.
- Output matches the declared schema/format on the first try.
</quality_bar>`,
    scoreBefore: 33,
    scoreAfter: 75
  },
  {
    label: 'Agentic — tool use',
    before: 'use the database tools to find inactive users',
    after: `<role>
Tool-using agent: calls a tool only when a step needs it, recovers from errors, stops on explicit criteria.
</role>

<context>
[ASSUMPTION: no separate context block; the facts stated in the task are the context — flag load-bearing assumptions]
</context>

<task>
use the database tools to find inactive users
</task>

<constraints>
- On a tool error: retry once, then fall back or report.
</constraints>

<output_format>
Final deliverable first; then a short log of actions taken (tool → result, one line each) and any unresolved issues.
</output_format>

<quality_bar>
- Every step has an observable stop criterion.
- Conformance to all constraints above.
- Output matches the declared schema/format on the first try.
</quality_bar>`,
    scoreBefore: 38,
    scoreAfter: 68
  }
];
