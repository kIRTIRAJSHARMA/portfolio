import { useEffect, useState } from "react";

const LANG_COLORS = {
  Kotlin: "#A97BFF",
  Java: "#b07219",
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  "C++": "#f34b7d",
  C: "#555555",
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/kIRTIRAJSHARMA/repos?sort=updated&per_page=12")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(r => !r.fork));
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) return <p className="boot-log">⏳ Fetching repositories...</p>;
  if (error)   return <p className="boot-log">❌ Could not load repos. <a href="https://github.com/kIRTIRAJSHARMA?tab=repositories" target="_blank" rel="noreferrer" className="resume-link">View on GitHub ↗</a></p>;

  return (
    <div className="projects-grid">
      {repos.map(repo => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="repo-card"
        >
          <div className="repo-top">
            <span className="repo-name">📁 {repo.name}</span>
            {repo.stargazers_count > 0 && (
              <span className="repo-stars">⭐ {repo.stargazers_count}</span>
            )}
          </div>
          {repo.description && (
            <p className="repo-desc">{repo.description}</p>
          )}
          <div className="repo-bottom">
            {repo.language && (
              <span className="repo-lang">
                <span className="lang-dot" style={{ background: LANG_COLORS[repo.language] || "#888" }} />
                {repo.language}
              </span>
            )}
            <span className="repo-updated">
              Updated {new Date(repo.updated_at).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
            </span>
          </div>
        </a>
      ))}
      <a href="https://github.com/kIRTIRAJSHARMA?tab=repositories" target="_blank" rel="noreferrer" className="view-all-btn">
        ↗ View all on GitHub
      </a>
    </div>
  );
}
