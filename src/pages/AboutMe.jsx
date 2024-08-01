import { useState, useEffect } from "react";


function AboutMe() {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    try {
      const response = await fetch("https://api.github.com/users/github-john-doe");
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${response.status}`);
      }
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="d-block p-2 bg-dark text-white">
      <h1>Qui suis-je?</h1>

      <div className="d-block p-2 bg-primary text-white">
        {user.id && ( 
          <article key={user.id} className="card">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <img src={user.avatar_url} alt={user.login} />
            <p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.html_url}
              </a>
            </p>
          </article>
        )}
      </div>
    </div>
  );
}

export default AboutMe;
