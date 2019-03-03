module.exports = {
	apps: [
		{
			name: 'Next Server',
			// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
			script: './server/index.js',
			instances: 'max',
			env: {
				NODE_ENV: 'development'
			},
			env_production: {
				NODE_ENV: 'production'
			}
		}
	]
}
