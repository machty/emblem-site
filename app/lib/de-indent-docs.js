import trimEmblem from 'emblem-site/lib/trim-emblem';

export default function(docs) {
  return docs.map(doc => {
    if (doc.emblem) {
      doc.emblem = trimEmblem(doc.emblem);
    }

    return doc;
  });
}
