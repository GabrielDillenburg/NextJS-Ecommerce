import mongoose from 'mongoose'

const connection = {}

async function connect() {
	if (connection.isConnected()) {
		console.log('Already Connected')
		return
	}

	if (mongoose.connection.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState
		if (connection.isConnected === 1) {
			console.log('use previous connection')
		}

		await mongoose.disconnect()
	}

	const db = await mongoose.connect(process.env.MONGODB_URI, {})
	console.log('new connection')
	connection.isConnected = db.connections[0].readyState
}
