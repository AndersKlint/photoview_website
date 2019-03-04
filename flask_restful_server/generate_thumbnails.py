from PIL import Image
from glob import glob
from os.path import join
import os

image_directory = '/media/anders/Media/Pictures/Post processed/'
save_directory = image_directory + 'thumbnails/'
thumbnail_size = 512, 512

def make_thumbnails(directory):
    files = []
    for ext in ('*.png', '*.jpg'):
        files.extend(glob(join(directory, ext)))
    for filepath in files:
        filename = os.path.basename(filepath)
        print('READING FILE: ' + str(filename))
        img = Image.open(filepath)
        img.thumbnail(thumbnail_size)
        print('SAVING TO: ' + str(save_directory + filename) + ".thumbnail")
        img.save(str(save_directory + filename) + ".thumbnail", "JPEG")

if __name__ == '__main__':
    make_thumbnails(image_directory)
