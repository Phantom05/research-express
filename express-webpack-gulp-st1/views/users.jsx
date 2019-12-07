const Layout = require('./layout');

<Layout>
  <ul class="users">
    {users.map(user => (
    	<li key={user}>{user.name}</li>
    ))}
  </ul>
</Layout>