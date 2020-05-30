import ecosystems from '../ecosystems';
import { SpotLight } from 'three';
import InvisibleModel from '../models/invisible-model';

export default Object.keys(ecosystems).map(key => {
  const spotLight = new SpotLight(...ecosystems[key].menuOptions.spotLight);
  spotLight.position.set(...ecosystems[key].menuOptions.lightPosition);
  spotLight.target.position.set(0, 0, 0);

  const rect = new InvisibleModel({
    position: ecosystems[key].menuOptions.rectPosition,
    rotation: ecosystems[key].menuOptions.rectRotation,
    dimensions: ecosystems[key].menuOptions.rectDimensions,
    name: key
  });

  return {
    spotLight,
    rect
  };
});
