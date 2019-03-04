#!flask/bin/python
import os
import io
from glob import glob
from os.path import join

from flask import Flask, jsonify
from flask import send_file


app = Flask(__name__)

image_directory = '/media/anders/Media/Pictures/Post processed/'
thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/'
images = []
thumbnails = []

@app.route('/images/<int:pid>.png')
def get_thumbnail(pid):
    image_binary = thumbnails[pid]
    response = make_response(image_binary, pid)
    response.headers.set('Content-Type', 'image/png')
    response.headers.set(
        'Content-Disposition', 'attachment', filename='%s.png' % pid)
    return response

@app.route('/images/<int:pid>.png.raw')
def get_image(pid):
    image_binary = images[pid]
    response = make_response(image_binary, pid)
    response.headers.set('Content-Type', 'image/png')
    response.headers.set(
        'Content-Disposition', 'attachment', filename='%s.png' % pid)
    return response

def read_images(directory):
    img_list = []
    files = []
    for ext in ('*.png', '*.jpg', '*.thumbnail'):
        files.extend(glob(join(directory, ext)))
    files.sort() #TODO: hacky solutions, change to proper id later instead of order
    for filepath in files:
        filename = os.path.basename(filepath)
        print('READING FILE: ' + str(filename))
        img_list.append(open(filepath, "rb").read())
    return img_list

def make_response(image_binary, pid):
    return send_file(
    io.BytesIO(image_binary),
    mimetype='image/png',
    as_attachment=True,
    attachment_filename='%s.png' % pid)

if __name__ == '__main__':
    images = read_images(image_directory)
    thumbnails = read_images(thumbnail_directory)
    app.run(debug=True)
