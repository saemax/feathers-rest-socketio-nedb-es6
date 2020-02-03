import { Users } from './users.class';
import createModel from '../../models/users.model';
import hooks from './users.hooks';

export default app => {
	const Model = createModel(app);
	const paginate = app.get('paginate');

	const options = {
		Model,
		paginate
	};

	// Initialize our service with any options it requires
	app.use('/users', new Users(options, app));

	// Get our initialized service so that we can register hooks
	const service = app.service('users');

	service.hooks(hooks);
};
