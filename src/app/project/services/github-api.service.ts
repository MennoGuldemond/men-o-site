import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { IRepositoryInfo } from '../models';

@Injectable()
export class GitHubApiService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://api.github.com';

  getUserData(username: string): Observable<any> {
    let headers = new HttpHeaders({ 'Accept': 'application/vnd.github.full+json' });
    let options = { headers: headers };

    return this.httpClient.get<any>(`${this.baseUrl}/users/${username}`, options);
  }

  getUserRepos(username: string): Observable<IRepositoryInfo> {
    return this.httpClient.get<IRepositoryInfo>(`${this.baseUrl}/users/${username}/repos`);
  }

}
