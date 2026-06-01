// app.js — Responsive entry point.
// Desktop (≥720px): full-viewport layout, white card centered on warm background.
// Mobile (<720px): stacked scrollable layout with hamburger nav.

function useIsMobile(breakpoint = 720) {
  const [mobile, setMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return mobile;
}

function App() {
  const isMobile = useIsMobile();
  return isMobile ? <ClassicMobileSite /> : <ClassicSite />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
