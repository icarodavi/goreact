import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlaylistaActions } from '../ducks/playlists';

export function* getPlaylists() {
  try {
    const response = yield call(api.get, '/playlists');
    yield put(PlaylistaActions.getPlaylistsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
  }
}
