module.exports = {
    ini(app) {
        const staticRoutes = require('../routes/static');
        app.use(staticRoutes);
    }
}