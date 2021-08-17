export interface GalleryImage {
  name: string;
  src: string;
}

export enum ANIM_STATE {
  IDLE = 'idle',
  START = 'start',
  END = 'end'
}

export enum ANCHORS {
  CONCEPT = 'concept',
  FEATURES = 'features',
  DEVELOPER = 'developer'
}
