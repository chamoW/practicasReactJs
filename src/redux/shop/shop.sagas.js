import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  convertCollectionSnapshotToMap, firestoreStoreApp
} from "./../../componentes/store/components/shop/firebaseShop.utils";
import {
  fetchCollectionError,
  fetchCollectionSuccess,
  SHOP_DATA_START
} from "./shop-actions";

export function* fetchCollectionAsyn() {
  yield console.log("FIRED!");

  try {
    const collectionRef = firestoreStoreApp.collection("shopData");
    const snapshot = yield collectionRef.get();
    const collectionsToMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsToMap));

  } catch (error) {
    yield put(fetchCollectionError(error.message))
    
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(SHOP_DATA_START, fetchCollectionAsyn);
}
