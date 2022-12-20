export function renderTemplate(template, users) {
    let result = '';

    users.map((user) => {
        user.name = `${user.first_name} ${user.last_name}`;
    });
    users.forEach(user => {
        result += template
            .replaceAll('{{name}}', user.name)
            .replaceAll('{{email}}', user.email)
            .replaceAll('{{avatar}}', user.avatar);
    });

    return result;
}
