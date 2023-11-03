 import Link from 'next/link';
import styles from './Button.module.css';

function ticket() {
  return (
<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-md sm:text-center">
      <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
也可嘗試我們的
          <span className={styles.abc}>機器人🤖️</span>
協助(系統測試中)
</h2>
      <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
        <Link
          href="/chat"
          className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
        >
          立刻與機器人聊天
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default ticket;
