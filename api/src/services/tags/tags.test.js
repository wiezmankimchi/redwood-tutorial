import { tags, tag, createTag, updateTag, deleteTag } from './tags'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tags', () => {
  scenario('returns all tags', async (scenario) => {
    const result = await tags()

    expect(result.length).toEqual(Object.keys(scenario.tag).length)
  })

  scenario('returns a single tag', async (scenario) => {
    const result = await tag({ id: scenario.tag.one.id })

    expect(result).toEqual(scenario.tag.one)
  })

  scenario('creates a tag', async () => {
    const result = await createTag({
      input: { name: 'String4223575' },
    })

    expect(result.name).toEqual('String4223575')
  })

  scenario('updates a tag', async (scenario) => {
    const original = await tag({ id: scenario.tag.one.id })
    const result = await updateTag({
      id: original.id,
      input: { name: 'String62014832' },
    })

    expect(result.name).toEqual('String62014832')
  })

  scenario('deletes a tag', async (scenario) => {
    const original = await deleteTag({ id: scenario.tag.one.id })
    const result = await tag({ id: original.id })

    expect(result).toEqual(null)
  })
})
