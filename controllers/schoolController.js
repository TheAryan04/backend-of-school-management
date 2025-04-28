import {execute} from '../config/db.js';
import calculateDistance from '../utils/calculateDistance.js';

export async function addSchool(req, res) {
    try {
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        if (isNaN(latitude) || isNaN(longitude)) {
            return res.status(400).json({ message: 'Latitude and Longitude must be numbers.' });
        }

        const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        await execute(sql, [name, address, latitude, longitude]);

        res.status(201).json({ message: 'School added successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
}

export async function listSchools(req, res) {
    try {
        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ message: 'Latitude and Longitude are required.' });
        }

        const [schools] = await execute('SELECT * FROM schools');

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const schoolsWithDistance = schools.map((school) => ({
            ...school,
            distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
        }));

        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        res.status(200).json({ schools: schoolsWithDistance });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
}
