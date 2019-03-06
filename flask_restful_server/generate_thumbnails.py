from PIL import Image
from glob import glob
from os.path import join
import os
import errno

# @param:_ image_files - list of path to each file
# @oaram:_ name_modifier - appends string to filename
def make_thumbnails(image_files, save_directory, thumbnail_size, name_modifier):
    try_make_directory(save_directory) # makes save folder if not exists
    for filepath in image_files:
        filename = os.path.basename(filepath)
        img = Image.open(filepath)
        print('\nREADING FILE: ' + str(filename))
        img.thumbnail(thumbnail_size)
        print('SAVING TO: ' + str(save_directory + filename + name_modifier) + ".thumbnail")
        img.save(str(save_directory + filename + name_modifier) + ".thumbnail", "JPEG")

def read_files(directory):
    files = []
    for ext in ('*.png', '*.jpg'):
        files.extend(glob(join(directory, ext)))
    return files

def try_make_directory(dir_name):
    if not os.path.exists(os.path.dirname(dir_name)):
        try:
            os.makedirs(os.path.dirname(dir_name))
        except OSError as exc: # Guard against race condition
            if exc.errno != errno.EEXIST:
                raise

if __name__ == '__main__':
    raw_image_directory = '/media/anders/Media/Pictures/Post processed/'

    small_thumbnail_save_directory = raw_image_directory + 'thumbnails/small/'
    small_thumbnail_size = 512, 768

    big_thumbnail_save_directory = raw_image_directory + 'thumbnails/big/'
    big_thumbnail_size = 1440, 1024

    #Init
    try_make_directory(raw_image_directory + 'thumbnails/')
    image_files = read_files(raw_image_directory)

    make_thumbnails(image_files, small_thumbnail_save_directory, small_thumbnail_size, '.small')
    make_thumbnails(image_files, big_thumbnail_save_directory, big_thumbnail_size, '.big')
