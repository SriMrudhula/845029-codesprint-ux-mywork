import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../Models/feedback';
const Requestheaders={headers:new HttpHeaders(
  {
    'Content-Type':'application/json'
  }
  )}
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url:string="http://localhost:4444/Feedback/";
  constructor(private http:HttpClient) {}
public Add(fb:Feedback):Observable<any>
{
  return this.http.post(this.url,fb);
}   
public get():Observable<any>
{
  return this.http.get(this.url);
}}
