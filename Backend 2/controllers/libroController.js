const Libro = require("../models/Libro");

exports.crearLibro = async(req, res) => {
    try {
        let libro;

        // Creamos nuestro Libro
        libro = new Libro(req.body);

        await libro.save();
        res.send(libro);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error');
    }
};

exports.obtenerLibros = async(req, res) => {

    try {

        const libros = await Libro.find();
        res.json(libros);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error');
    }
};

exports.actualizarLibro = async(req, res) => {

    try {
        const { name, editorial, description, author, price, units, status } = req.body;
        let libro = await Libro.findById(req.params.id);

        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro.' });
        }

        libro.name = name;
        libro.editorial = editorial;
        libro.description = description;
        libro.author = author;
        libro.price = price;
        libro.units = units;
        libro.status = status;

        libro = await Libro.findOneAndUpdate({ _id: req.params.id }, libro, { new: true });
        res.json(libro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error');
    }
};

exports.obtenerLibro = async(req, res) => {

    try {
        let libro = await Libro.findById(req.params.id);

        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro.' });
        }

        res.json(libro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error');
    }
};

exports.eliminarLibro = async(req, res) => {

    try {
        let libro = await Libro.findById(req.params.id);

        if (!libro) {
            res.status(404).json({ msg: 'No existe el libro.' });
        }

        await Libro.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Libro eliminado exitosamente.' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un Error');
    }
};