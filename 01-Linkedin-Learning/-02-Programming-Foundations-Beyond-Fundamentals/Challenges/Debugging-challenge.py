def plant_recommendation(care):
    # I added one more '=', there was just one '=', it would lead to run time error
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    elif care == 'high':
        print('orchid')


# This Line will cause an error, because there no func. with this name (plant_rec)
# plant_rec('low')

plant_recommendation('medium')

# There was not condition for 'high' input -> so, we had to modify the third condition the func.
plant_recommendation('high')