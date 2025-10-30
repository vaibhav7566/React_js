# Memoization

Memoization is an optimization technique used to store the results of expensive function calls and return the cached result when the same inputs occur again, instead of recalculating the value.

### In simple words:
It helps React (or JavaScript) remember previous results for the same inputs — to avoid unnecessary re-computation and improve performance.

# 🧠 1. React.memo(Component)

Use: Prevents unnecessary re-render of a component if its props are same.

### Explanation:
Normally, jab parent re-render hota hai → child bhi re-render hota hai.
Lekin agar child React.memo() se wrapped hai, toh React usko re-render nahi karega jab tak props same hain.

React.memo() ek Higher Order Component (HOC) hai.
Ye component ke unnecessary re-renders ko rokta hai.

Agar component ko same props milte hain (no change), to React usko re-render nahi karta.

### 🟢 Use when:

* Component pure function jaisa ho

* Props rarely change karte ho



# ⚡ 2. useCallback(() => {}, [dependencies])

Use: Memoizes (remembers) a function, so that it’s not recreated on every render.

## Example:

const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);


## Without useCallback:
Jab bhi component re-render hota hai → function ka naya version ban jaata hai.
Agar ye function kisi child me prop ke form me gaya hai → child fir se re-render hota hai.

## With useCallback:
Same function memory me store ho jaata hai, jab tak dependencies change nahi hoti.
👉 Prevents unnecessary child renders.


# ⚙️ 3. useMemo(() => {}, [dependencies])

Use: Memoizes (remembers) a value or calculation result, not a function.

## Example:

const expensiveCalc = useMemo(() => {
  return count * 1000;
}, [count]);


###  Without useMemo:
Har render pe ye heavy calculation chalega.
### With useMemo:
Sirf jab count change hoga tabhi ye chalega. Baaki time cached result use karega.