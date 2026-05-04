import { useEffect, useState } from "react";

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/kIRTIRAJSHARMA").then(r => r.json()),
      fetch("https://api.github.com/users/kIRTIRAJSHARMA/repos?per_page=100").then(r => r.json())
    ])
      .then(([user, repoList]) => {
        if (user.login) setStats(user);
        if (Array.isArray(repoList)) setRepos(repoList);
        setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  if (loading) return <p className="boot-log">⏳ Fetching GitHub stats...</p>;
  if (error)   return <p className="boot-log">❌ Could not load stats.</p>;

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const languages = repos
    .filter(r => r.language)
    .reduce((acc, r) => { acc[r.language] = (acc[r.language] || 0) + 1; return acc; }, {});
  const topLangs = Object.entries(languages).sort((a, b) => b[1] - a[1]).slice(0, 5);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <p className="stat-title">👤 Profile</p>
        <p className="stat-row"><span>Name</span><span>{stats.name}</span></p>
        <p className="stat-row"><span>Username</span><span>@{stats.login}</span></p>
        <p className="stat-row"><span>Followers</span><span>{stats.followers}</span></p>
        <p className="stat-row"><span>Following</span><span>{stats.following}</span></p>
        <p className="stat-row"><span>Public Repos</span><span>{stats.public_repos}</span></p>
        <p className="stat-row"><span>Total Stars</span><span>⭐ {totalStars}</span></p>
      </div>
      <div className="stat-card">
        <p className="stat-title">💻 Top Languages</p>
        {topLangs.map(([lang, count]) => (
          <div key={lang} className="lang-bar-wrap">
            <div className="lang-bar-label">
              <span>{lang}</span>
              <span>{count} repo{count > 1 ? "s" : ""}</span>
            </div>
            <div className="lang-bar-bg">
              <div
                className="lang-bar-fill"
                style={{ width: `${Math.round((count / repos.length) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
