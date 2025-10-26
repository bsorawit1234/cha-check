import React, { useEffect, useId, useMemo, useRef, useState } from "react";

const SearchBar = ({
  options, // [{value, label}]
  value, // controlled selected value (optional)
  onChange, // (newValue) => void
  placeholder = "Select…",
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [internalValue, setInternalValue] = useState(value ?? null);
  const selectedValue = value !== undefined ? value : internalValue;

  const buttonRef = useRef(null);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const id = useId();

  // Filter options
  const filtered = useMemo(() => {
    if (!query.trim()) return options;
    const q = query.toLowerCase();
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [options, query]);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!buttonRef.current) return;
      const combo = buttonRef.current.parentElement; // wrapper
      if (combo && !combo.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Keyboard navigation
  const [activeIndex, setActiveIndex] = useState(-1);
  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    } else {
      setQuery("");
      setActiveIndex(-1);
    }
  }, [open]);

  function commit(val) {
    if (onChange) onChange(val);
    else setInternalValue(val);
    setOpen(false);
  }

  const selectedLabel =
    options.find((o) => o.value === selectedValue)?.label ?? "";

  return (
    <div className={`relative w-full max-w-xl ${className}`}>
      {/* Combobox button / display */}
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        className={`
          w-full text-left bg-white rounded-2xl px-5 py-3.5
          shadow-[0_0_10px_rgba(0,0,0,0.25)]
          focus:outline-none focus:ring-2 focus:ring-blue-400
        `}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-gray-900">
          {selectedLabel || placeholder}
        </span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          {/* chevron */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 7l5 6 5-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Popover */}
      {open && (
        <div
          className="absolute z-50 mt-2 w-full bg-white rounded-xl border border-gray-200 shadow-lg"
          role="dialog"
        >
          {/* Search input */}
          <div className="p-2">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Search options"
            />
          </div>

          {/* Options */}
          <ul
            ref={listRef}
            id={`${id}-listbox`}
            role="listbox"
            className="max-h-60 overflow-auto py-1"
          >
            {filtered.length === 0 && (
              <li className="px-4 py-2 text-gray-500">No results</li>
            )}
            {filtered.map((opt, idx) => {
              const active = idx === activeIndex;
              const selected = opt.value === selectedValue;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={selected}
                  tabIndex={-1}
                  className={`
                    cursor-pointer px-4 py-2
                    ${active ? "bg-gray-100" : ""}
                    ${
                      selected ? "font-semibold text-gray-900" : "text-gray-700"
                    }
                  `}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => commit(opt.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") commit(opt.value);
                  }}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>

          <div
            className="sr-only"
            aria-hidden
            onKeyDown={(e) => {
              if (!open) return;
              if (e.key === "Escape") setOpen(false);
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
              }
              if (e.key === "Home") {
                e.preventDefault();
                setActiveIndex(0);
              }
              if (e.key === "End") {
                e.preventDefault();
                setActiveIndex(filtered.length - 1);
              }
              if (e.key === "Enter" && filtered[activeIndex]) {
                e.preventDefault();
                commit(filtered[activeIndex].value);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
