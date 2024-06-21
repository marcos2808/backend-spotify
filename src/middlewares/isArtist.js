const isArtist = async (req, res, next) => {

    try {

        if(req.user.artist){
            return next();
        }
        return res.status(401).json({ message: 'no eres artista, no puedes realizar esta accion' });
    } catch (error) {
        res.status(401).json({ message: 'ocurrio un error en el proceso de autorizacion' });
    }
}

export default isArtist;
