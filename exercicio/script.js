document.addEventListener('DOMContentLoaded', function() {
    const baseURL = 'https://api.github.com/users/ProgRibeiro';

    async function fetchGitHubProfile() {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json();
            updateProfile(data);
        } catch (error) {
            console.error('Erro ao buscar dados do perfil:', error);
        }
    }

    function updateProfile(data) {
        document.querySelector('.profile-avatar').src = data.avatar_url || 'https://via.placeholder.com/180x180';
        document.querySelector('.profile-name').textContent = data.name || 'Nome não disponível';
        document.querySelector('.profile-username').textContent = '@' + (data.login || 'username não disponível');
        document.querySelector('.repos').textContent = data.public_repos || '0';
        document.querySelector('.followers').textContent = data.followers || '0';
        document.querySelector('.following').textContent = data.following || '0';
        document.querySelector('.profile-link').href = data.html_url || '#';
    }

    fetchGitHubProfile();
});
