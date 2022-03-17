// Controller
'use strict';
import {cats, getCat} from '../models/catModel';

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
    const catId = req.params.id;
    const cat = getCat(catId);
    res.json(cat.length > 0 ? cat.pop() : {});
  };

const cat_post = (req, res) => {
  console.log('DATA', req.body, req.file);
  res.json(req.file);
};

export {
  cat_list_get,
  cat_get,
  cat_post,
};

