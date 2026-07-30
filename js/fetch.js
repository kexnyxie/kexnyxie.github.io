document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-container");
  if (!container) return;

  fetch("data/projects.json")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((projects) => {
      container.innerHTML = projects
        .map(
          (project) => `
        <div class="entry">
          <div class="hash">${project.hash}</div>
          <div class="entry-body">
            <h3>${project.title}</h3>
            <p class="msg">${project.description}</p>
            <div class="files-row">
              ${project.tags.map((tag) => `<span class="file-tag">${tag}</span>`).join("")}
            </div>
            ${project.link ? `<a class="entry-link" href="${project.link}" target="_blank" rel="noopener">github repo</a>` : ""}
          </div>
        </div>
      `,
        )
        .join("");
    })
    .catch((error) => {
      console.error("Error loading project database:", error);
      container.innerHTML = `<p class="msg" style="color: var(--err)">Failed to load project database via data/projects.json.</p>`;
    });
});
