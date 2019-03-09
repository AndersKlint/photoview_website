
image_ratings = { 'one' : '1', 'three' : '3', 'two' : '2'}
print(sorted(image_ratings.items(), key=lambda x: x[1], reverse=True))
