/**
 * AlbumController
 *
 * @description :: Server-side logic for managing Albums
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    destroy: function (req, res) { var id = req.param('id');
        if (!id) {
            return res.badRequest('No id passed.');
        }
        Album.update(id, {isEnabled: false}).exec(function (err, album) { if (err) {
            return res.serverError(err); }
            return res.jsonx(album); });
    },
    create: function (req, res) { if (!req.body) {
        return res.badRequest('No body data passed.'); }
        Album.create(req.body).exec(function (err, album) { if (err) {
            return res.serverError(err); }
            return res.jsonx(album); });
    },
    update: function (req, res) { if (!req.body) {
        return res.badRequest('No body data passed.'); }
        var id = req.param('id');
        if (!id) {
            return res.badRequest('No id passed.');
        }
        Album.update(id, req.body).exec(function (err, album) { if (err) {
            return res.serverError(err); }
            return res.jsonx(album); });
    }
};

