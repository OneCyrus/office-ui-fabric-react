import { styled } from '../../Utilities';
import { IFacepileProps, IFacepileStyleProps, IFacepileStyles } from './Facepile.types';
import { FacepileBase } from './Facepile.base';
import { styles } from './Facepile.styles';

/**
 * The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person.
 */
export const Facepile = styled<IFacepileProps, IFacepileStyleProps, IFacepileStyles>(FacepileBase, styles);
