import { useState } from "react";
import { motion } from "framer-motion";

// Lightweight local replacements for project UI components so this file
// can run standalone. These preserve the `className` prop so Tailwind
// users can still style if Tailwind is present.
function Card({ children, className = "", style = {}, ...props }) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(14,19,47,0.9)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
        border: "1px solid rgba(34,211,238,0.08)",
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ children, className = "", style = {}, ...props }) {
  return (
    <div className={className} style={{ padding: 20, ...style }} {...props}>
      {children}
    </div>
  );
}

function Button({ children, className = "", style = {}, ...props }) {
  return (
    <button
      className={className}
      style={{
        display: "inline-block",
        padding: "10px 14px",
        borderRadius: 8,
        border: "none",
        cursor: "pointer",
        fontWeight: 600,
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

function Input({ className = "", style = {}, ...props }) {
  return (
    <input
      className={className}
      style={{
        background: "transparent",
        border: "1px solid rgba(34,211,238,0.18)",
        padding: "10px 12px",
        borderRadius: 8,
        color: "inherit",
        outline: "none",
        width: "100%",
        fontSize: 14,
        ...style,
      }}
      {...props}
    />
  );
}

export default function MetaPilotLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Login successful (demo only)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A0F2C] to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <Card className="bg-[#0E132F]/90 backdrop-blur-xl border border-cyan-400/20 shadow-2xl rounded-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold tracking-wide">MetaPilot AI</h1>
              <p className="text-cyan-400 text-sm mt-2">Efficiency. Automated.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-cyan-400/30 focus:border-cyan-400"
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-cyan-400/30 focus:border-cyan-400"
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              <Button
                type="submit"
                className="w-full bg-cyan-400 text-black hover:bg-cyan-300 transition-all"
              >
                Login
              </Button>
            </form>

            <div className="text-center mt-6 text-sm text-gray-400">
              <p className="hover:text-cyan-400 cursor-pointer transition">Forgot password?</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
