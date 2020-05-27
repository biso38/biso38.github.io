import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const CONFIG = {
  space: 'ojs3skuwn0ea',
  accessToken: '-CnEPfz1n-59KANvKZgUQ_vR5Pidm6Vd4orZIVMzujc',

  contentTypeIds: {
    Projects: 'projects'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.Projects
    }, query))
    .then(res => res.items);
  }
}