const usersTableBody =
    document.getElementById('usersTableBody');

async function initializeUsers() {

    try {

        const users =
            await fetchUsers();

        renderUsers(users);

    } catch(error) {

        console.error(
            'Users Error:',
            error
        );
    }
}

function renderUsers(users) {

    usersTableBody.innerHTML = '';

    users.forEach(user => {

        const row =
            document.createElement('tr');

        row.innerHTML = `
            <td>#${user.id}</td>

            <td>${user.username}</td>

            <td>${user.role}</td>
        `;

        usersTableBody.appendChild(row);
    });
}

initializeUsers();