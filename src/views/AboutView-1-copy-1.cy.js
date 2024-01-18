import AboutView1 from './AboutView-1.vue'

describe('<AboutView1 />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(AboutView1)
  })
})