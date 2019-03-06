#!/usr/bin/env python

import os
import io
from glob import glob
from os.path import join

from flask import Flask, jsonify
from flask import send_file
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


image_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/big'
thumbnail_directory = '/media/anders/Media/Pictures/Post processed/thumbnails/small'
images = {}
thumbnails = {}
files = []
filenames = []

@app.route('/images/small/<string:filename>.jpg')
def get_thumbnail(image_name):
    image_binary = thumbnails[image_name]
    return make_image_response(image_binary, image_name)

@app.route('/images/big/<int:pid>.jpg')
def get_image(pid):
    image_binary = images[pid]
    return make_image_response(image_binary, pid)

@app.route('/images/filenames.json')
def get_filenames():
    return jsonify(filenames)

def make_image_response(image_binary, pid):
    response = send_file(
        io.BytesIO(image_binary),
        mimetype='image/JPEG',
        as_attachment=True,
        attachment_filename='%s.jpg' % pid)
    response.headers.set('Content-Type', 'image/JPEG')
    response.headers.set(
        'Content-Disposition', 'attachment', filename='%s.jpg' % pid)
    return response

def read_images(directory):
    img_dict = {}
    for filepath in files:
        filename = os.path.basename(filepath)
        print('READING FILE: ' + str(filename))
        img_dict[filename] = open(filepath, "rb").read()
    return img_dict

def read_files(directory):
    files = []
    for ext in ('*.png', '*.jpg', '*.thumbnail'):
        files.extend(glob(join(directory, ext)))
    for filepath in files:
        filenames.append(os.path.basename(filepath))
    return files, filenames

if __name__ == '__main__':
    files, filenames = read_files(image_directory)
    images = read_images(image_directory)
    thumbnails = read_images(thumbnail_directory)
    app.run(debug=True)
