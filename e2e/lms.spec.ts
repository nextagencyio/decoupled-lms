import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('renders hero section with CMS content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Learn the Skills That Matter')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Elevate Learning' })).toBeVisible()
  })

  test('renders stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Active Learners')).toBeVisible()
    await expect(page.locator('text=Expert-Led Courses')).toBeVisible()
  })

  test('renders CTA section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=Start Learning Today')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Browse Courses' }).first()).toBeVisible()
  })
})

test.describe('Courses', () => {
  test('listing page renders courses from Drupal', async ({ page }) => {
    await page.goto('/courses')
    await expect(page.locator('h1')).toContainText('Courses')
    await expect(page.getByRole('heading', { name: 'The Complete React Developer Course' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Python for Data Science Masterclass' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /UX Design Fundamentals/ })).toBeVisible()
    await expect(page.getByRole('heading', { name: /AWS Cloud Practitioner/ })).toBeVisible()
  })

  test('detail page renders course content', async ({ page }) => {
    await page.goto('/courses/complete-react-developer')
    await expect(page.getByRole('heading', { name: 'The Complete React Developer Course' }).first()).toBeVisible()
    await expect(page.getByText('Sarah Chen', { exact: true }).first()).toBeVisible()
  })
})

test.describe('Instructors', () => {
  test('listing page renders instructors', async ({ page }) => {
    await page.goto('/instructors')
    await expect(page.locator('h1')).toContainText('Instructors')
    await expect(page.getByRole('heading', { name: 'Sarah Chen' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Maya Patel' })).toBeVisible()
  })

  test('detail page renders instructor content', async ({ page }) => {
    await page.goto('/instructors/sarah-chen')
    await expect(page.getByRole('heading', { name: 'Sarah Chen' })).toBeVisible()
  })
})

test.describe('Testimonials', () => {
  test('listing page renders testimonials', async ({ page }) => {
    await page.goto('/testimonials')
    await expect(page.locator('h1')).toContainText('Testimonials')
    await expect(page.getByText('Alex Thompson', { exact: true }).first()).toBeVisible()
    await expect(page.getByText('Priya Sharma', { exact: true }).first()).toBeVisible()
  })

  test('detail page renders testimonial content', async ({ page }) => {
    await page.goto('/testimonials/alex-career-change')
    await expect(page.getByText('Alex Thompson', { exact: true }).first()).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page renders', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About Elevate Learning' })).toBeVisible()
    await expect(page.locator('text=Our Mission')).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('header links navigate correctly', async ({ page }) => {
    await page.goto('/')
    await page.locator('header a[href="/courses"]').first().click()
    await expect(page).toHaveURL('/courses')
    await expect(page.locator('h1')).toContainText('Courses')
  })
})
