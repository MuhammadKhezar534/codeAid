export default (app) => {
  app.post(
    `/tenant/:tenantId/compensation`,
    require('./compensationCreate').default,
  );
  app.put(
    `/tenant/:tenantId/compensation/:id`,
    require('./compensationUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/compensation/import`,
    require('./compensationImport').default,
  );
  app.delete(
    `/tenant/:tenantId/compensation`,
    require('./compensationDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/compensation/autocomplete`,
    require('./compensationAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/compensation`,
    require('./compensationList').default,
  );
  app.get(
    `/tenant/:tenantId/compensation/:id`,
    require('./compensationFind').default,
  );
};
