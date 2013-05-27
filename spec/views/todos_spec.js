describe('FooView', function() {
  beforeEach(function() {
    this.controller = App.TodosController.create();
    this.subject = App.TodosView.create({ controller: this.controller });
    this.subject.append();
  });

  afterEach(function() {
    this.subject && this.subject.remove();
  });

  it("renders the foo's favoriteFood", function() {
    this.controller.set('content', [{name: "todo1", done: true}]);
    Em.run.sync();
    expect(this.subject.$('.todos').length).toBe(1);
  });
});
