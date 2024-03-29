import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

import { environment } from '../environments/environment';

const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>(`${API_URL}/themes`);
  }

  loadTheme(id: string) {
    return this.http.get<ITheme>(`${API_URL}/themes/${id}`);
  }

  loadPosts(limit?: number) {
    let query = limit ? `?limit=${limit}` : ''
    return this.http.get<IPost[]>(`${API_URL}/posts${query}`);
  }
}
