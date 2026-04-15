# Orders & Communication

Communication discipline that ensures plans are understood before they're executed and changes are communicated before they take effect.

## The Sequence

```
WARNO → OPORD → FRAGO (as needed)
```

**Never skip steps.** People need advance notice (WARNO) before the full plan (OPORD), and explicit change orders (FRAGO) when conditions change.

## WARNO (Warning Order)

**Purpose:** Give people advance notice so they can begin preparations.

**When:** As soon as you know something is coming, even before the plan is complete.

**Contains:**
- What's coming (brief description)
- Tentative timeline
- Who's involved
- What to start preparing

**Example:**
> "We're going to reorganize the support team structure. Expect details next week. Start thinking about current pain points and ideal team composition."

## OPORD (Operations Order)

**Purpose:** The complete plan with enough detail for others to execute.

**Format:**

### 1. Situation
- Background and context
- Constraints and limitations
- What's already been decided

### 2. Mission
Clear statement of **task** (what to do) and **purpose** (why it matters).

> "Migrate the customer database to the new platform **in order to** reduce query latency and enable the new search features."

**The purpose is the most important part.** When conditions change, people who understand the purpose can adapt. People who only know the task will stop and wait for instructions.

### 3. Execution
- Concept of operations (the overall approach)
- Task assignments (who does what)
- Coordinating instructions (timing, dependencies, boundaries)
- Success criteria (how we know we're done)

### 4. Sustainment
- Resources required
- Budget
- Support needed from other teams

### 5. Command & Signal
- Who's in charge
- Decision authority
- Communication channels
- Reporting schedule

## FRAGO (Fragmentary Order)

**Purpose:** Modify an existing OPORD when conditions change.

**Contains:**
- Reference to the original OPORD
- What changed and why
- Specific modifications (only the parts that changed)
- What stays the same (explicit confirmation)
- When the change takes effect

**Rule:** If you change the plan, communicate the change. Undocumented changes cause chaos.

## Communication Principles

| Principle | Why |
|-----------|-----|
| **Intent before instructions** | People who understand *why* can adapt; people who only know *what* get stuck |
| **Confirm understanding** | Back-briefs catch misunderstandings before execution |
| **Push information** | Don't wait to be asked — share what people need to know |
| **One source of truth** | Conflicting information is worse than no information |
| **Timely over perfect** | A rough update now is better than a polished report tomorrow |
