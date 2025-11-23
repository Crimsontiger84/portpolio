document.addEventListener('DOMContentLoaded', () => {
    renderPortfolio();
});

function renderPortfolio() {
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found. Make sure data.js is loaded.');
        return;
    }

    const { profile, experience, projects, skills } = portfolioData;

    // 1. Render Profile (Hero & About)
    document.getElementById('hero-name').textContent = profile.name;
    document.getElementById('hero-tagline').textContent = profile.tagline;
    document.getElementById('about-desc').textContent = profile.about;

    // 2. Render Skills
    const skillsContainer = document.getElementById('skills-list');
    skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        skillsContainer.appendChild(span);
    });

    // 3. Render Experience
    const experienceContainer = document.getElementById('experience-list');
    experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';

        let achievementsHtml = '';
        if (exp.achievements && exp.achievements.length > 0) {
            achievementsHtml = `<ul class="timeline-achievements">
                ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
            </ul>`;
        }

        item.innerHTML = `
            <span class="timeline-date">${exp.period}</span>
            <div class="timeline-content">
                <h3>${exp.role}</h3>
                <div class="timeline-company">${exp.company}</div>
                <p class="timeline-desc">${exp.description}</p>
                ${achievementsHtml}
            </div>
        `;
        experienceContainer.appendChild(item);
    });

    // 4. Render Projects
    const projectsContainer = document.getElementById('projects-list');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const tagsHtml = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        card.innerHTML = `
            <span class="project-period">${project.period}</span>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${tagsHtml}
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // 5. Render Social Links
    const socialContainer = document.getElementById('social-links');
    const socialLinks = [
        { icon: 'fa-github', url: profile.github },
        { icon: 'fa-linkedin', url: profile.linkedin },
        { icon: 'fa-envelope', url: `mailto:${profile.email}` }
    ];

    socialLinks.forEach(link => {
        if (link.url && link.url !== '#') {
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'social-icon';
            a.innerHTML = `<i class="fa-brands ${link.icon} ${link.icon === 'fa-envelope' ? 'fa-solid' : ''}"></i>`;
            socialContainer.appendChild(a);
        }
    });
}
