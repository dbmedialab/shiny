import grid from './grid';
import introduction from './introduction';
import loaders from './Loaders';
import typography from './Typography';
import editorialMarking from './EditorialMarking';
import linkBars from './link-bars';
import trysilPlug from './TrysilPlug';
import floatImage from './FloatImage';
import ads from './Ads';
import lazyProgressiveImage from './LazyProgressiveImage';
import logos from './logos';
import forms from './forms';

introduction();

// Atoms
typography();
editorialMarking();
loaders();
grid();

// Molecules
linkBars();
trysilPlug();
floatImage();
ads();
lazyProgressiveImage();
logos();
forms();

