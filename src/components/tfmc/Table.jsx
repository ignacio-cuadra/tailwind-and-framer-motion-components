import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'

const Table = () => {
  return (
    <table className="w-full text-neutral-700">
      <thead>
        <tr className="bg-neutral-100 border-b-4 border-neutral-200">
          <th className="p-5"></th>
          <th className="p-5">Column 1</th>
          <th className="p-5">Column 2</th>
          <th className="p-5">Column 3</th>
          <th className="p-5">Column 4</th>
          <th className="p-5">Column 5</th>
        </tr>
      </thead>
      <tbody className="bg-neutral-50">
        <tr className="border-b border-neutral-200">
          <td className="p-5">
            <button><AiOutlineDown/></button>
          </td>
          <td className="p-5">Row 1 Column 1</td>
          <td className="p-5">Row 1 Column 2</td>
          <td className="p-5">Row 1 Column 3</td>
          <td className="p-5">Row 1 Column 4</td>
          <td className="p-5">Row 1 Column 5</td>
        </tr>
        <tr className="border-b border-neutral-200">
          <td colspan={6} className="p-5 pl-10">
            <span className="block font-semibold text-2xl">Title</span>
            <span className="block font-semibold text-lg text-neutral-400">Title</span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore dolore, ratione modi numquam hic magni dicta illo tempora ducimus fugiat, deserunt asperiores nostrum sequi explicabo ad dignissimos autem perspiciatis molestias.</p>
            <div className="flex flex-row-reverse gap-5 pt-5 mt-5 border-t">
              <button className="flex p-2 items-center gap-1 rounded-md bg-blue-500 text-white"><AiOutlineCheck/> Confirm</button>
              <button className="flex p-2 items-center gap-1 rounded-md text-white bg-slate-400"><AiOutlineClose/> Close</button>
            </div>
          </td>
        </tr>
        <tr className="border-b border-neutral-200">
          <td className="p-5">
            <button><AiOutlineUp/></button>
          </td>
          <td className="p-5">Row 2 Column 1</td>
          <td className="p-5">Row 2 Column 2</td>
          <td className="p-5">Row 2 Column 3</td>
          <td className="p-5">Row 2 Column 4</td>
          <td className="p-5">Row 2 Column 5</td>
        </tr>
        <tr className="border-b border-neutral-200">
          <td className="p-5">
            <button><AiOutlineUp/></button>
          </td>
          <td className="p-5">Row 3 Column 1</td>
          <td className="p-5">Row 3 Column 2</td>
          <td className="p-5">Row 3 Column 3</td>
          <td className="p-5">Row 3 Column 4</td>
          <td className="p-5">Row 3 Column 5</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Table